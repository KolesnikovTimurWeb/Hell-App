import logo from '@/images/logo.svg';

export const Logo = (props: { classImage: string }) => (
  <img
    src={logo}
    alt="logo"
    className={props.classImage}
  />
)