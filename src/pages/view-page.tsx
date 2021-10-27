import { Card } from '../components/index';
import { FormData } from "../App"
import styles from './zets.module.css';

type PropsType = {
  data: FormData;
}

export const ViewPage = ({ data }: PropsType) => {
  return (
    <div className = {styles.wrapper}>
      <div className={styles.subtitle}> Персональные данные </div>
      {(data.fullname && data.age) && <Card className = {styles.card}> {data.fullname}, {data.age} </Card>}

      <div className = {styles.subtitle}> Дети </div>
      {data.childs.map((item, index) => (
        <div className = {styles.card} key = {index}>
          <Card isCard> {item.fullname}, {item.age} </Card>
        </div>
      ))}
    </div>
  )
}