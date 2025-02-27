import { Button } from '@mui/material';
// import { Drawer } from 'arisen-front-components';
import { useState } from 'react';
import { ResizableDrawer } from '../../../lib/main';
import classes from './TestDrawer.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TestDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(() => true);
  const handleClose = () => setIsOpen(() => false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        open
      </Button>
      <ResizableDrawer
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        anchor="left"
        paperClassName={classes.paper}
        header={
          <div className={classes.header}>
            <Button variant="contained" size="small">
              Вход
            </Button>
            <Button variant="contained" size="small">
              Регистрация
            </Button>
          </div>
        }
        footer={
          <div
            style={{
              fontWeight: 400,
              fontSize: 10,
              textAlign: 'center',
              width: '100%',
            }}
          >
            v0.0.1
          </div>
        }
        startPosition={300}
        minSize={200}
        maxSize={500}
        draggerClassName={classes.dragger}
        draggerIcon={<MoreVertIcon />}
      >
        <div>
          <p>ergwrgewrg</p>
          <p>ergwrgewrg</p>
          <p>ergwrgewrg</p>
          <p>ergwrgewrg</p>
          <p>ergwrgewrg</p>
          <p>ergwrgewrg</p>
        </div>
      </ResizableDrawer>
    </div>
  );
};

export default TestDrawer;
