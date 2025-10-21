import Section from "../components/section";
import Card from "../components/card";
import Faq from "../components/faq";
import { HeaderedPage } from "../components/page";
 
const Home = () => {
    return (
        <>
            <HeaderedPage  image="/images/headers/home.jpg" color="white">
                <Section color="white">
                    <Card color = "gold">
                        <h3>Land Acknowledgement</h3>
                        <hr className="bg-deepblue"/>
                        <p className="w-full">Hamilton is located on the traditional territories of Indigenous peoples dating back thousands of years. We recognize and respect their contributions and the treaties between the Huron-Wendat, Mississauga, Anishinaabe, Haudenosaunee, Erie, Neutral nations and the Crown. Today, this meeting place is still home to many Indigenous people and we are grateful to have the opportunity to live and work here.</p>
                        <br/>
                        <p className="w-full">For more information and resources, please visit the <a className="underline" href="https://nctr.ca/" target="_blank">National Centre for Truth and Reconciliation</a>.</p>
                    </Card>
                    <br/>
                    <Card color = "cilcpurple">
                        <h3 className="text-white">Celebrating our 55th aniversary</h3>
                        <hr className="bg-white"/>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col w-1/2 pr-4 gap-4">
                                <p className="w-full text-white">Join us on October 29th from 6PM to 8PM to celebrate our 55th aniversary! For more information, please refer to the invitation to the right, or download the pdf below.</p>
                                <a w-full className="cursor-pointer" href="flyer/CILC 55th Anniversary Invitation.pdf">
                                    <button className="rounded-sm cursor-pointer w-full">Download Invitation</button>
                                </a>
                                <p className="w-full text-white">Don't forget to RSVP ASAP at cilc1970@gmail.com</p>
                            </div>
                            <div className="flex flex-col w-1/2 pl-4">
                                <img className="w-full" src="flyer/CILC 55th Anniversary Invitation.png" alt="CILC 55th Anniversary celebration invitation"></img>
                            </div>
                        </div>
                    </Card>
                    <br/>
                    <Card color = "cilcgreen">
                        <h3>New programme!</h3>
                        <hr className="bg-deepblue"/>
                        <p className="w-full">The CILC is proud to announce the Festival of Lights travelling programme! For more information, please visit our <a className="underline" href="/programmes">programmes page</a>.</p>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h1 className="font-bold">Welcome to the Childen's International Learning Centre</h1>
                    <hr className="bg-deepblue"/>
                    <p>The Children's International Learning Centre (CILC) was established with the vision of contributing to a world of care and respect for all people and our environment.  We endeavour to do this by promoting respect for diversity and awareness of our world community through guided discovery and interactive artistic travelling programmes. Our website is always open with activities and resources.</p>
                </Section>
                <Section color="white">
                    <Faq/>
                </Section>
            </HeaderedPage>
        </>
    );
};
 
export default Home;