import type {
  Meta,
  StoryObj,
} from '@storybook/react';
import type {
  FC,
  PropsWithChildren,
} from 'react';
import { useMemo } from 'react';
import type { Themes } from '.';
import {
  colors,
  themes,
} from '.';
import {
  boxStyle,
  sectionList,
  sectionStyle,
  sectionTitle,
} from './palette.stories.css';
import { themeClassName } from './utils';

// Constants
const paletteFields = Object.entries(colors)
  .map(([label, field]) => ({ label, field }));

// Building blocks
const Box: FC<{
  color: string,
  label?: string
}> = ({
  color,
  label,
}) => (
  <article className={boxStyle} style={{ background: color }}>
    {label ?? color}
  </article>
);

const BoxSection: FC<PropsWithChildren<{ label: string }>> = ({
  label,
  children,
}) => (
  <section className={sectionStyle}>
    <h1 className={sectionTitle}>{label}</h1>
    <div className={sectionList}>
      {children}
    </div>
  </section>
);

const PaletteField: FC<{
  field: Record<string, string>,
  label: string,
}> = ({
  field,
  label,
}) => {
  const entries = useMemo(
    () => Object.entries(field).map(([name, color]) => ({
      color,
      label: name,
    })),
    [field],
  );
  return (
    <BoxSection label={label}>
      {entries.map(({ label: name, color }) => (
        <Box key={name} label={name} color={color} />
      ))}
    </BoxSection>
  );
};

// Showcase Itself
const PaletteShowcase: FC<{
  theme: Themes
}> = ({ theme }) => (
  <section className={themeClassName(theme)}>
    {paletteFields.map(({ label, field }) => (
      <PaletteField key={label} label={label} field={field} />
    ))}
  </section>
);

// Stories
const meta: Meta<typeof PaletteShowcase> = {
  title: 'Theme/Palette',
  component: PaletteShowcase,
  argTypes: {
    theme: {
      options: themes,
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaletteShowcase>;

export const Showcase: Story = {
  args: {
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
  },
  parameters: {
    controls: {
      exclude: ['theme'],
    },
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
  parameters: {
    controls: {
      exclude: ['theme'],
    },
  },
};
