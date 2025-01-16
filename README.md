# React Component Library (Based on MUI)

This is a React component library built on top of [Material-UI (MUI)](https://mui.com/), designed to provide customizable and reusable components for your applications. The library is currently in development, with the first component being `ResizableDrawer`.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [ResizableDrawer](#resizabledrawer)
- [Storybook](#storybook)
- [Development](#development)
- [License](#license)

---

## Installation

You can install the library:

```bash
npm install arisen-front-components
```

---

## Usage

Import the components you need and use them in your project:

```tsx
import { useState } from 'react';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ResizableDrawer } from 'arisen-front-components';
import classes from './TestDrawer.module.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(() => true);
  const handleClose = () => setIsOpen(() => false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        open
      </Button>
      <ResizableDrawer
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        header={
          <div className={classes.header}>
            <Button variant="contained" size="small">
              sign in
            </Button>
            <Button variant="contained" size="small">
              sign up
            </Button>
          </div>
        }
        footer={<div>v0.0.1</div>}
        width={300}
        minWidth={200}
        maxWidth={500}
        draggerClassName={classes.dragger}
        draggerIcon={<MoreVertIcon />}
      >
        <div>
          <p>children</p>
          <p>node</p>
        </div>
      </ResizableDrawer>
    </div>
  );
};

export default App;
```

Ensure you have MUI installed as a peer dependency:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

---

## Components

### ResizableDrawer

The `ResizableDrawer` is a flexible and customizable drawer component with resizing functionality. It can be used to create side panels, navigation menus, or other layout elements that require adjustable widths.

#### Props

| Name          | Type     | Default   | Description                                       |
|---------------|----------|-----------|---------------------------------------------------|
| `initialWidth` | `number` | `300`     | The initial width of the drawer in pixels.        |
| `minWidth`    | `number` | `200`     | The minimum width of the drawer in pixels.        |
| `maxWidth`    | `number` | `600`     | The maximum width of the drawer in pixels.        |
| `content`     | `ReactNode` | `null`  | The content to display inside the drawer.         |

#### Example

```tsx
<ResizableDrawer
  open={isOpen}
  onOpen={handleOpen}
  onClose={handleClose}
  header={
    <div className={classes.header}>
      <Button variant="contained" size="small">
        sign in
      </Button>
      <Button variant="contained" size="small">
        sign up
      </Button>
    </div>
  }
  footer={<div>v0.0.1</div>}
  width={300}
  minWidth={200}
  maxWidth={500}
  draggerClassName={classes.dragger}
  draggerIcon={<MoreVertIcon />}
>
  <div>
    <p>children</p>
    <p>node</p>
  </div>
</ResizableDrawer>
```

---

## Storybook

This library includes a [Storybook](https://storybook.js.org/) instance for visualizing and testing components.

### Running Storybook Locally

To start the Storybook development server, run:

```bash
npm run storybook
```

### Building Storybook

To build a static version of the Storybook for deployment:

```bash
npm run build-storybook
```

The static files will be output to the `storybook-static` directory.

### Storybook Demo

You can view a live version of the Storybook [here](https://cumdao.github.io/front-components/).

---

## Development

To contribute or extend the library, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run Storybook for component development:
   ```bash
   npm run storybook
   ```

---

## License

This project is licensed under the [MIT License](LICENSE).

