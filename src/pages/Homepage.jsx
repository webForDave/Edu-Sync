import { useState } from "react";
import Button from "../coponents/Button";
import features from '../coponents/featuresData';
import FeaturesCard from "../coponents/FeaturesCard";


const Homepage = () => {

    const [cards, setFeatures] = useState(features);

  return (
    <main>

        {/* hero section */}

        <section className="w-full h-[500px] p-[25px] lg:p-[50px] flex justify-center items-center text-[#fff]"
        style={{backgroundImage: 'url(/assets/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} 
        >
            <div>
                <h1 className="fraunces-heading text-center text-[30px] lg:text-[40px]">Boost your learning with AI-Powered Study Plans</h1>
                <p className="lato-bold-italic text-center text-[23px]">Personalized study sessions tailored to your goals and progress.</p>

                <div className="md:w-[40%] h-auto p-[10px] mx-auto my-[20px] flex justify-between items-center">
                    <Button backgroundColor='#FD8835' text='Get Started' path='/log-in' />
                    <Button backgroundColor='#1D3446' text='Sign Up for free' path='/sign-up' />
                </div>

            </div>
        </section>


        {/* features card */}

        <section className="fraunces-heading w-auto h-auto p-[10px]">
            <h1 className="text-center text-[30px] lg:text-[40px]">Feature Higlights</h1>

            <div className="features w-full h-auto py-[40px] px-[20px]">
                <FeaturesCard cards={cards}/>
            </div>
        </section>
    </main>
  )
}

export default Homepage;