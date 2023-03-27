import React, {useState} from 'react';
import { useAddProductMutation } from '../../../redux/reducers/productsApi';
import { useForm } from 'react-hook-form';
import {BsCaretDownFill} from 'react-icons/bs';

const AdminAddProduct = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);
    const [addProduct] = useAddProductMutation();

    const {
        register,
        reset,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm({mode: "onBlur"});

   

    const handleAddProduct = async ()=> {
        const newPoduct = {
            category: getValues('category'),
            title: getValues('title'),
            categories: getValues('categories'),
            name: getValues('name'),
            image: getValues('image'),
            price: getValues('price'),
            weight: getValues('weight'),
            quantity: getValues('quantity'),               
            ingridients: getValues('ingridients'),
            compound: getValues('compound'),

        }
        reset();
        console.log(newPoduct)


       
        await addProduct(newPoduct).unwrap();
       
      

    }

    return (
        <div className='addProduct'>
            
            <div className='addProduct__form-title-row'>
            
                <h2 style={{color: showAddProduct ? '#F46D40': 'grey' }} className='addProduct__form-title form__title'>Добавление Продукта</h2>
                <span onClick={()=> setShowAddProduct(!showAddProduct)} className='addProduct__form-title-icon' style={{paddingTop: '5px'}}>
                    <BsCaretDownFill style={{fill: showAddProduct ? '#F46D40': 'grey' }}/>
                </span>
                
            </div>


            {
                showAddProduct && <form className='addProduct__form form' onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form__block">
                    <label className='form__label'>
                         <select className='form__select' {...register('category', {
                                required: true,
                            })}>
                            <option disabled value="">Выберите категорию</option>
                            <option value="pizza">pizza</option>
                            <option value="rolls">rolls</option>
                            <option value="sushi">sushi</option>
                            <option value="sets">sets</option>
                            <option value="soup">soup</option>
                            <option value="wok">wok</option>
                            <option value="salads">salads</option>
                            <option value="drinks">drinks</option>
                        </select>
                    </label>
                    <label className='form__label'>
                         <select className='form__select' {...register('categories')}>
                            <option value="">Выберите подкатегорию</option>
                            <option value="Теплые ролы">Теплые ролы</option>
                            <option value="Холодные ролы">Холодные ролы</option>
                            
                        </select>
                    </label>
                </div>



                <label className='form__label'>
                    <input {...register('title', {
                        required: true,
                    })} placeholder='Введите название' className='form__field' type="text" />
                </label>

                

                <label className='form__label'>
                    <input {...register('name', {
                        required: true
                    })}  className='form__field' placeholder='Введите название name' type="text"/>
                </label>

                <label className='form__label'>
                    <input {...register('image', {
                        required: true
                    })}  className='form__field' placeholder='Введите ссылку на картинку' type="text" />
                </label>

                <div className="form__block">
                    <label className='form__label'>
                        <span className='form__label-title'>Цена</span>
                        <input {...register('price', {
                            required: true,
                        })} defaultValue={0} className='form__field' type="number" />
                    </label>
                    <label className='form__label'>
                        <span className='form__label-title'>Вес</span>
                        <input {...register('weight')} defaultValue={0} className='form__field' type="number" />
                    </label>
                    <label className='form__label'>
                        <span className='form__label-title'>Кол кусочков</span>
                        <input {...register('quantity')} defaultValue={0} className='form__field' type="number" />
                    </label>
                </div>

                <label className='form__label'>
                    <input {...register('ingridients')} className='form__field' placeholder='Введите основные ингридикнты ч/з запятую'  type="text"  />
                </label>

                

                <label className='form__label'>
                    <input {...register('compound')}  className='form__field' placeholder='Введите состав сета ч/з запятую'  type="text"  />
                </label>

                <button className='form__btn btn' type='submit'>Добавить</button>
            </form>
            }
            
            
        </div>
    );
};

export default AdminAddProduct;