import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  const [originData, setOriginData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id, 10) === parseInt(id, 10),
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [diaryList, id]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
