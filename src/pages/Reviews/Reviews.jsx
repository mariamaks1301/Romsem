import React, {useState} from 'react';
import { useGetReviewsQuery, useAddReviewMutation } from '../../redux/reducers/reviewsApi';

const Reviews = () => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    

    const {data = [] } = useGetReviewsQuery();



    const [addReview] = useAddReviewMutation();
    const handleAddReview = async () => {
        const newReview = {
            name: name,
            date: date,
            text: text,
        }
        console.log(newReview);

        // setName('');
        // setText('');

        await addReview(newReview).unwrap()
    }


    return (
        <div className='reviews'>
            <div className="container">
                <div className="reviews__row">
                    {
                        data.map(item => (
                            <div key={item.id} className='reviews__item'>
                                <div className='reviews__item-row'>
                                    <p className='reviews__item-name'>{item.name}</p>
                                    <p className='reviews__item-date'>{item.date}</p>  
                                </div>
                                <div className='reviews__item-text'>
                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className='reviews__form' action="" onSubmit={handleAddReview}>
                    <div className="reviews__form-row">
                        <label className='reviews__form-label' htmlFor="">
                            <input value={name} onChange={(e)=> setName(e.target.value)} className='reviews__form-field reviews__form-field-short' type="text" placeholder='Ваше имя' />
                        </label>
                        <label className='reviews__form-label' htmlFor="">
                            <input value={date} onChange={(e)=> setDate(e.target.value)} className='reviews__form-field reviews__form-field-short' type="date" placeholder='data' />
                        </label>
                    </div>
                    
                    <label className='reviews__label' htmlFor="">
                        <textarea value={text} onChange={(e)=> setText(e.target.value)} className='reviews__form-field reviews__form-field-textarea' type="text" />
                    </label>
                    <button className='reviews__form-btn btn' type='submit'>Добавить отзыв</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;