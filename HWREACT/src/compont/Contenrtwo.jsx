import React from 'react'

function Contenrtwo() {
  return (
    <div className='w-full h-screen flex flex-col justify-evenly items-center '>
            <div>
                <p className='text-center text-5xl '>Here are some of the benefits<br/>of your offer</p>
            </div>
            <div>
                <p className='text-center font-bold ' >Explain what makes your product or service great. Talk about features in a way<br/>that highlights the real value get out of them.</p>
            </div>
            <div className='w-full flex justify-evenly max-sm:flex-col max-sm:items-center max:sm:pl-5'>
                <div className='text-align: center; ' >
                    <img  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"/>
                    <h1 className='font-bold text-center: center;' >Benefit 1</h1>
                    <p >For example, restaurants and<br/>bakeries could outline the<br/>health benefits of their all-<br/>natural ingredients.</p>
                </div>
                <div >
                    <img  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"/>
                    <h1 >Benefit 2</h1>
                    <p >Florists and other small retailers<br/>might use this space to describe<br/>how their products make<br/>delightful, one-of-a-kind gifts.</p>
                </div>
                <div >
                    <img  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"/>
                    <h1 className='font-bold '>Benefit 3</h1>
                    <p >You could also add buttons to<br/>this section and share links to<br/>otehr products or available<br/>delivery methods.</p>
                </div>
            </div>
        </div>
  )
}

export default Contenrtwo