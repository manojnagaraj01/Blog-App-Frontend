import React, {useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import "./Style.css"
import Footer from '../Routes/Footer';
import axios from 'axios';
function Bollywood() {
  const [bollywoodlatest, setBollywoodlatest] = useState([]);
  const [bollywoodTopData, setBollywoodTopData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/bollywoodlatest');
        setBollywoodlatest(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/bollywoodtop');
        setBollywoodTopData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1();
  }, []);
  
  return (
    <>
      <div className='parentContainer'>
        <div>
          <h2 className='news-head'>Bollywood Latest</h2> 
            {bollywoodlatest?.map((blog, index) => (
                <div key={index}>
                    <Link to={`/detailsbollywood/${blog.id}`}>
                      <div className='child-compo-left'>                      
                        <div>
                          <img className='imageLatest-left' src={blog.image} alt="not found"/> 
                        </div>
                        <div className='latest-news'>
                          <h2 className='latest-news-head'>{blog.heading}</h2>
                          <p className='latest-news-desp'>{blog.description.slice(0, 80)} . . .</p>
                        </div>
                      </div>
                    </Link>
                    <hr/>
                </div>
            ))}
          </div>
          <div style={{borderLeft:"2px solid black"}}>
          <h2 className='news-head'>Bollywood Top</h2>
          {bollywoodTopData?.map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div key={index}>
                    <Link key={index} to={`/detailsbollywood/${item.id}`}>
                    <div className='child-compo-right'>                      
                      <div>
                        <img className='imageLatest' src={item.image} alt="not found"/> 
                      </div>
                      <div>
                        <h2 className='latest-news-head-right'>{item.heading}</h2>
                      </div>
                    </div>
                  </Link>
                <hr/>
              </div>                             
              )
            })}
            <a href="https://karnatakatourism.org/">
            <div className='advertisement'>
              <h2 className='news-head'>Advertisement</h2>
                <img width={"200px"} height={"150px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9ppROvd32lgEZuWK1CtEY0uqCOC1UL0jWzLYybidwnyDj2ZUTLpw&usqp=CAE&s' alt='ad img' />
                <img className='adv-image'  src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/652c3184501321.Y3JvcCw5MzAsNzI4LDM3Nyww.jpg' alt='ad img'/>
            </div>
            </a> 
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Bollywood;
