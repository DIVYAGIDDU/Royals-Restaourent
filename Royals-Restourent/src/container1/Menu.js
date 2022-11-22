import React from "react";
import './Menu.css'
let Menu = () => {
    return <>
        <div class='some-page-wrapper' id='menu'>
            <h1 className="text-center">Menu List</h1> 
            <hr/> 
            <select id="find">
            <option selected>Find your Dish</option>
            <option>Kadai Chicken</option>
            <option>Chicken Donne Biryani</option>
            <option>Fish Cury</option>
            <option>Mutton Curry</option>
            
            </select>
           
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/08/One-pot-spiced-roast-chicken-05079e9.jpg" height="300px" width="300px" alt="chicken-image" />
                                        <h1>Kadai Chicken</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className="list-group-item"><p>Kadai Chicken, also known as Karahi Chicken or Karahi Murgh, gets its name from the vessel in which this absolutely delectable dish is cooked. A Kadai (an Indian wok) is a heavy-bottomed pot that’s used to prepare this delicious, spicy and flavourful dish.</p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://image.shutterstock.com/image-photo/fish-curry_seer-curry-traditional-indian-260nw-1910030440.jpg" height="275px" width="300px" alt="chicken-image" />
                                        <h1>Fish curry</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className="list-group-item"><p>How would you describe a fish head curry?
                                                Fish head curry is a spicy, curried dish unique to Singapore. Blending the spices of a typical South Indian fish curry with the fish head, the dish is a delicacy among the Chinese. Fish head curry was first sold from a stall at Sophia Road </p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://media.istockphoto.com/id/1164095805/photo/spicy-indian-lamb-curry-close-up.jpg?s=612x612&w=0&k=20&c=XfeuNZr25yYu7VckmFAckEWZa-i8TSX97T5lBTT4Tf4=" height="260px" width="300px" alt="chicken-image" />
                                        <h1 >Mutton Curry </h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className="list-group-item"><p>Mutton curry (also referred to as kosha mangsho, lamb curry, or goat curry) is a dish that is prepared from goat meat (or sometimes lamb meat) and vegetables. The dish is found in different variations across all states, countries and regions of South Asia and the Caribbean.</p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://i.ytimg.com/vi/2GAZ723iV_o/maxresdefault.jpg" height="300px" width="300px" alt="chicken-image" />
                                        <h1> Mutton Boti</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className='list-group-item'><p>welcome to suneetha kitchenstoday recipe is Hyderabadi Style Boti Ka Salan | Spicy Boti ka Salan Recipe | Goat Intestine Recipe | Boti curry....................</p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://i.ytimg.com/vi/EsvyiCbmJjc/maxresdefault.jpg" height="300px" width="300px" alt="chicken-image" />
                                        <h1 >Chicken Donne Biryani</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className="list-group-item"><p>Mutton curry (also referred to as kosha mangsho, lamb curry, or goat curry) is a dish that is prepared from goat meat (or sometimes lamb meat) and vegetables. The dish is found in different variations across all states, countries and regions of South Asia and the Caribbean.</p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src="https://content3.jdmagicbox.com/comp/bangalore/e1/080pxx80.xx80.140120171501.q5e1/catalogue/kfc-chandra-layout-bangalore-restaurants-2vxhi.jpg" height="300px" width="300px" alt="chicken-image" />
                                        <h1>KFC</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-group">
                                            <li className="list-group-item"><p>KFC Corporation, based in Louisville, Kentucky, is one of the few brands in America that can boast about having a rich, 60-year history of success and innovation. In fact, KFC is the world's most popular chicken restaurant chain and a division of Yum! Brands, the world's largest restaurant company.</p></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <br/>
        <p className="text-center">
        <a href="#">Back To Top</a>
    </p>


    </>
}
export default Menu