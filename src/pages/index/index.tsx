import CommonFooter from '../../components/common/footer/CommonFooter'
import CommonHeader from '../../components/common/header/CommonHeader'
import CommonNav from '../../components/common/navigation/CommonNav'
import CommonSearchBox from '../../components/common/searchBar/CommonSearchBox'
import Card from './components/Card'
import axios from 'axios'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import { CardDTO } from './types/card'

function index() {
  const [imgUrls, setImgUrls] = useState([])

  const getDate = async() => {
    //API 호출
    const API_URL = `https://api.unsplash.com/search/photos`
    const API_KEY = `AIPBYZTCOSBpdPUe4p-KdRqWnrQq8xmtDO4m7E97IkQ`
    const PER_PAGE = 30

    const searchValue = 'Korea'
    const pageValue = 100
    try{
      const res = 
        await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
        console.log(res)

        if(res.status == 200){ //통신이 완료 되었다는 의미
          setImgUrls(res.data.results)
        }
    }catch(error){
      console.log(error)
    }
  }

  const cardList = imgUrls.map((card:CardDTO) => {
    return (
      <Card data ={card} key={card.id}/> 
    )
  })

  useEffect(() => {
    getDate()
  }, [])

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
          {cardList }
        </div>
      </div>
      {/*공통 푸터 UI 부분 */}
      <CommonFooter />
  </div>
  )
}

export default index
