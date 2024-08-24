import { useState } from "react";
import Button from "../coponents/HomepageComponents/Button";
import features from '../coponents/HomepageComponents/featuresData';
import FeaturesCard from "../coponents/HomepageComponents/FeaturesCard";
import { Link } from "react-router-dom";


const Homepage = () => {

    const [cards, setFeatures] = useState(features);

    const currentYear = new Date().getFullYear();

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

        {/* about study pal */}

        <section className="fraunces-heading w-full h-auto p-[30px]">
            <h1 className="text-center text-[40px]">About Study Pal</h1>

            <p className="lato-black-italic text-[#1D3446] py-[20px]">Our Mission</p>
            <p className="lato-regular">At Study Pal, we believe that every student deserves a personalized learning experience that adapts to their unique needs and goals. Founded in 2024, our mission is to transform the way people approach learning through cutting-edge AI technology. We aim to make education smarter, more engaging, and more effective, helping students achieve their academic and personal goals with confidence and ease.</p>
            
            <p className="lato-black-italic text-[#1D3446] py-[20px]">Our Vission</p>
            <p className="lato-regular">We envision a world where learning is tailored to each individual, where every student has access to personalized study plans that fit their specific learning style and pace. Our goal is to be at the forefront of educational technology, continually innovating to provide the best possible tools and resources for learners of all ages.</p>

        </section>

        {/* call to action */}

        <section className="w-full h-auto bg-[#1D3446] p-[30px] rounded-tl-[120px] text-[#fff]">
            <h2 className="fraunces-heading text-[30px] text-center">Ready to Elevate Your Study Game?</h2>
            <p className="lato-bold text-center py-[10px]">Join thousands of students who have transformed their learning experience with <span className="lato-bold-italic text-[#FD8835]"
            >Study Pal</span>.</p>
            <div className="w-[80%] md:w-[50%] lg:w-[30%] h-auto p-[10px] mx-auto flex justify-between items-center">
                <Button text='Start Now' path='/log-in' backgroundColor='#FD8835'/>
                <Button text='Find Out More' path='/details' backgroundColor='#406E8E'/>
            </div>

            {/* footer */}

            <footer className="w-full h-auto border-t border-gray-600 my-[10px]">
                <p className="text-center py-[10px]">Have questions or need assistance? <Link to='/contact'><span className="lato-bold-italic text-[#FD8835]">Contact us</span></Link></p>
                <p className="text-center">&copy; {currentYear} <span className="lato-bold-italic text-[#FD8835]">Study Pal</span>. All rights reserved.</p>
            </footer>
        </section>
    </main>
  )
}

export default Homepage;