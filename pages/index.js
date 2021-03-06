// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import BottomElements from '../components/bottomElem';
import IconElem from '../components/iconElem';
import LeftElements from '../components/leftElem';

export default function Home() {
  return (
    <div className="Container">
      <img src="/car.png" alt="car" className="car" />
      <LeftElements />
      <BottomElements />
      <IconElem />
    </div>
  );
}
