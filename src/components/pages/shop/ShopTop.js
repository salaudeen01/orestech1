
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Slider,  Divider, Empty, Rate, Select, Card, Image } from 'antd';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import p1 from '../../images/pages/shop/prod1.jpg'
import p2 from '../../images/pages/shop/prod2.jpg'
import p3 from '../../images/pages/shop/prod3.jpg'
import p4 from '../../images/pages/shop/prod4.jpg'
import p5 from '../../images/pages/shop/prod5.jpg'
import p6 from '../../images/pages/shop/prod6.jpg'
import p7 from '../../images/pages/shop/prod7.jpg'
import p8 from '../../images/pages/shop/prod8.jpg'
import p9 from '../../images/pages/shop/prod9.jpg'

function ShopTop() {

    const [state, setstate] = useState({
        inputValue: 1,
        range: [],
    })
    


    const onRange= value =>{
        console.log(value)
        setstate(raw =>({...raw, range:value}))
    }


    const side =[
        {
            img: p2,
            name: 'Woods WiON wall socket and electricity control',
            prize: '$16.99',
            rate: 2
        },
        {
            img: p5,
            name: 'General Purpose Extension Cord in various sizes',
            prize: '$34.99',
            rate: 3
        },
        {
            img: p7,
            name: 'Everyday Original AAA super DC battery',
            prize: '$86.16',
            rate: 5
        }
    ]


    const main =[
        {
            img: p1,
            name: 'PowerBoss Electrical Generator 3500 watts Gasoline Portable',
            prize: '$329.99',
            rate: 4.5
        },
        {
            img: p2,
            name: 'Woods WiON wall socket and electricity control',
            prize: '$16.99',
            rate: 2
        },
        {
            img: p3,
            name: 'Intermatic Outdoor Portable Timer',
            prize: '$22.99',
            rate: 3
        },
        {
            img: p4,
            name: 'SuperFicial Home Fan Controller High sustainability',
            prize: '$23.95',
            rate: 3.5
        },
        {
            img: p5,
            name: 'General Purpose Extension Cord in various sizes',
            prize: '$34.99',
            rate: 3
        },
        {
            img: p6,
            name: 'Combination Double Toggle Switch',
            prize: '$15.99',
            rate: 2
        },
        {
            img: p7,
            name: 'Everyday Original AAA super DC battery',
            prize: '$86.16',
            rate: 5
        },
        {
            img: p8,
            name: 'GE Bluetooth Outdoor Smart Switch Timer',
            prize: '$49.16',
            rate: 4.5
        },
        {
            img: p9,
            name: 'Woods WiON wall socket and electricity control 250 watts min Control',
            prize: '$41.16',
            rate: 2.5
        }
    ]

      const { range } = state;
    return (
        <div className="et-about-top">
            <div className="w-100">
            
                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Shop</p>
                    </div>
                </div>




                <div className="my-8">
                    <div className="container p-md-0">
                        <div className="row">

                            {/* left section of shop >>>>> */}
                            <div className="col-md-3">

                                <div className="my-3 shadow py-5 px-5">
                                    <p className="fs-3 ff-pop fw-bold">Price</p>
                                    <div>
                                        <div>
                                            <Slider range defaultValue={[20, 50]} onChange={onRange}/>
                                            <p className="fs-6 bold-sm px-md-1"><span className="ff-pop fw-bold">Range Price:</span> <span>${range && range[0]}</span> - <span>${range && range[1]}</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3 shadow py-5 px-5">
                                    <p className="fs-3 ff-pop fw-bold">Category</p>
                                    <div>
                                        <ul className="li-st">
                                            <li className="h-point fs-6 fw-bold py-2">Clothing</li>
                                            <li className="h-point fs-6 fw-bold py-2">Music</li>
                                            <li className="h-point fs-6 fw-bold py-2">Posters</li>
                                            <li className="h-point fs-6 fw-bold py-2">Uncategorized</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="my-3 shadow py-5 px-5">
                                    <p className="fs-3 ff-pop fw-bold">Products</p>
                                    { side===0? <Empty/>:
                                    side.map(({img, name, prize, rate})=>(
                                        <div className="w-100 h-point d-flex my-3">
                                            <div>
                                                <img alt="product" src={img} className="w-75" />
                                            </div>
                                            <div>
                                                <p className="fs-6 fw-bold">{name}</p>
                                                <Rate value={rate} disabled className="text-orng" style={{fontSize:'10px'}}/>
                                                <p className="fs-5">{prize}</p>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>

                            </div>

                            {/* right section of shop >>>>>>>>> */}
                            <div className="col-md-9 ps-md-5">
                                <Divider/>
                                <div className="d-flex my-5">
                                    <p className="fs-6 bold-sm pe-md-5 pe-3">Showing 1–9 of 10 results</p>
                                    <Select className="" defaultValue="default" style={{ width: 250 }} size="large">
                                        <Select.Option value="default">Default Sorting</Select.Option>
                                        <Select.Option value="popularity">Sort By Popularity</Select.Option>
                                        <Select.Option value="average">Sort By Average Rating</Select.Option>
                                        <Select.Option value="latest">Sort By Latest</Select.Option>
                                        <Select.Option value="l-h">Sort By Prize: Low to High</Select.Option>
                                        <Select.Option value="h-l">Sort By Prize: High to Low</Select.Option>
                                    </Select>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        {main===[]?<Empty/>:
                                        main.map(({img, name,prize, rate})=>(
                                            <div className="my-3 col-md-4 text-center">
                                                <Card
                                                    hoverable
                                                    cover={
                                                    <Image
                                                        alt="product"
                                                        src={img}
                                                    />
                                                    }
                                                >
                                                    <p className="fs-6 hover-orng">{name}</p>
                                                    <Rate value={rate} allowHalf disabled className="text-orng" style={{fontSize:'10px'}}/>
                                                    <p className="fs-5 fw-bold">{prize}</p>
                                                    <p className="bold-sm fs-6 text-ld hover-orng"><span className="text-orng"><ShoppingCartOutlined/></span> Add to cart</p>
                                                </Card>
                                            </div>
                                        ))

                                        }
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                                    



            </div>
        </div>
    )
}

export default ShopTop
