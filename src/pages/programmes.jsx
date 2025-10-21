import Section from "../components/section";
import Card from "../components/card";
import { HeaderedPage } from "../components/page";
 
const Programmes = () => {
    return (
        <>
            <HeaderedPage image="/images/headers/programmes.jpg" color="cilcgreen">
                <Section color="white">
                    <Card color="cilcgreen">
                        <h3>Festivals of Light</h3>
                        <hr className="bg-deepblue"/>
                        <p>“Festivals of Light” or FOL, a favourite annual programme of both participants and CILC volunteers, is now in a travelling format and delivered from November to January.</p>
                        <br/>
                        <p>Through our programme, we highlight forms of light, elements of gift-giving and gatherings of family and friends.</p>
                        <br/>
                        <p>Related crafts and activities reinforce the key learnings and create meaningful connections to sustain an increased understanding of the value of diversity.</p>
                        <br/>
                        <div className="flex min-[900px]:flex-row flew-col items-center justify-center w-full gap-8 min-[900px]:gap-16">
                            <div className="grow max-w-128!">
                                <img className="w-full" src="flyer/2025_Final FOL Flyer.png"/>
                            </div>
                        </div>
                        <br/>
                        <a className="w-full" href="flyer/2025_Final FOL Flyer.pdf" download>
                            <button className="w-full bg-cilcdarkblue text-white">Download Flyer</button>
                        </a>
                        <br/>
                        <a className="w-full" href="/contact">
                            <button className="w-full bg-cilcdarkblue text-white">Contact Us</button>
                        </a>
                    </Card>
                </Section>
            </HeaderedPage>
        </>
    );
};
 
export default Programmes;