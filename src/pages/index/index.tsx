import styles from './styles/index.module.scss'
import { useState } from 'react'
import { imageData } from '../../recoil/selectors/imageSelector'
import { useRecoilValue } from 'recoil'
import { CardDTO } from './types/card'
import CommonFooter from '../../components/common/footer/CommonFooter'
import CommonHeader from '../../components/common/header/CommonHeader'
import CommonNav from '../../components/common/navigation/CommonNav'
import CommonSearchBox from '../../components/common/searchBar/CommonSearchBox'
import Card from './components/Card'

function index() {
  const imgSelector = useRecoilValue(imageData)
  const [imgData, setImgData] = useState<CardDTO[]>([])

  const CARD_LIST = imgSelector.data.results.map((card:CardDTO) => {
    return <Card data ={card} key={card.id}/> 
  })

  return (
    <div className={styles.page}>
      {/*공통 헤더 UI 부분*/}
      <CommonHeader />
      {/*공통 네이게이션 UI 부분*/}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhtoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시작 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/*검색창 UI */}
            <CommonSearchBox />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>
          {CARD_LIST }
        </div>
      </div>
      {/*공통 푸터 UI 부분 */}
      <CommonFooter />
  </div>
  )
}

export default index
