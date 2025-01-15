import classes from './Drawer.module.css';

interface DrawerProps {
  test: string;
}

export const Drawer = ({ test }: DrawerProps) => {
  return (
    <div className={classes.test}>
      <p>{test}</p>
    </div>
  );
};
