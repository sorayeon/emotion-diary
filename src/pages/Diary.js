import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import { getStringDate } from '../utils/date';
import { emotionList } from '../utils/emotion';

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const targetDiary = diaryList.find(
      (it) => parseInt(it.id, 10) === parseInt(id, 10),
    );

    if (targetDiary) {
      setData(targetDiary);
    } else {
      alert('없는 일기입니다.');
      navigate('/', { replace: true });
    }
  }, [diaryList, id]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id, 10) === parseInt(data.id, 10),
    );
    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text="&larr; 뒤로가기" onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text="수정하기"
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                'diary_img_wrapper',
                `diary_img_wrapper_${data.emotion}`,
              ].join(' ')}
            >
              <img
                src={curEmotionData.emotion_img}
                alt={curEmotionData.emotion_desc}
              />
              <div className="emotion_desc">{curEmotionData.emotion_desc}</div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
