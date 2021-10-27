import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className = {styles.wrapper}>
      <div>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    )
  }
}