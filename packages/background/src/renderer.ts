import type { RendererProperties } from './types';

type PointType = {
  x: number,
  y: number,
  impulse: number,
};

export const makeRenderer = (
  reference: HTMLCanvasElement,
  properties: RendererProperties = {} as RendererProperties,
) => {
  let {
    every,
    variance,
    size,
    speed,
    tolerance,
    edge,
  } = properties;
  const canvas = reference;

  const context = canvas.getContext('2d');
  let realSpeed: number;

  let points: PointType[];

  const update = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const col = Math.floor(canvas.width / every);
    const row = Math.floor(canvas.height / every);

    const colPad = canvas.width - (col - 1) * every;
    const rowPad = canvas.height - (row - 1) * every;

    realSpeed = Math.min(window.innerWidth, window.innerHeight) * (speed / 1000);

    points = Array.from({ length: col * row })
      .fill(0)
      .map((_, index) => ({
        x: Math.floor(index % col) * every + colPad / 2
          + Math.floor(Math.random() * variance * 2 - variance),
        y: Math.floor(index / col) * every + rowPad / 2
          + Math.floor(Math.random() * variance * 2 - variance),
        impulse: Math.random() * Math.PI * 2,
      }));
  };

  update();
  window.addEventListener('resize', update);

  let isRendering = true;
  const render = () => {
    const color = window
      ? window.getComputedStyle(canvas).getPropertyValue('color')
      : '#888';
    if (!isRendering || !context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color;

    points = points.map(({ x, y, impulse }) => {
      let newX = x + realSpeed * Math.cos(impulse);
      let newY = y + realSpeed * Math.sin(impulse);
      let newImpulse = impulse;
      if (
        x < -tolerance
        || x > canvas.width + tolerance
        || y < -tolerance
        || y > canvas.height + tolerance
      ) {
        newX = Math.min(canvas.width, Math.max(0, newX));
        newY = Math.min(canvas.height, Math.max(0, newY));
        newImpulse = (newImpulse + Math.PI) % (Math.PI * 2);
      }
      return {
        x: newX,
        y: newY,
        impulse: newImpulse,
      };
    });

    context.strokeStyle = color;
    for (const [index, { x, y }] of points.entries()) {
      for (const [index1, { x: x1, y: y1 }] of points.entries()) {
        if (index !== index1) {
          const distribution = Math.sqrt(
            (x - x1) ** 2
            + (y - y1) ** 2,
          );
          if (distribution < every * 1.2) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x1, y1);
            context.stroke();
          }
        }
      }
    }

    for (const { x, y } of points) {
      context.globalCompositeOperation = 'destination-out';
      context.beginPath();
      context.arc(x, y, size * 2.5, 0, Math.PI * 2);
      context.fill();
      context.globalCompositeOperation = 'source-over';
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }

    requestAnimationFrame(render);
  };

  const updateProperties = (newProperties: RendererProperties) => {
    every = newProperties.every === undefined ? every : newProperties.every;
    variance = newProperties.variance === undefined ? variance : newProperties.variance;
    size = newProperties.size === undefined ? size : newProperties.size;
    speed = newProperties.speed === undefined ? speed : newProperties.speed;
    tolerance = newProperties.tolerance === undefined ? tolerance : newProperties.tolerance;
    edge = newProperties.edge === undefined ? edge : newProperties.edge;
  };

  return {
    update: updateProperties,
    start: () => {
      isRendering = true;
      render();
    },
    stop: () => {
      isRendering = false;
    },
    renderOnce: () => {
      isRendering = true;
      render();
      isRendering = false;
    },
    canvas,
  };
};
