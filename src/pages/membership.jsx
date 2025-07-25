import Section from "../components/section";
import Card from "../components/card";
import { HeaderedPage } from "../components/page";
 
const Member = () => {
    return (
        <>
            <HeaderedPage image="/images/headers/member.jpg" color="cilcblue">
                <Section color="white">
                    <Card color="cilcpurple">
                        <h3 className="text-white">Contribute to our mission</h3>
                        <hr className="bg-white"/>
                        <p className="w-full text-white">As a not-for-profit organization (Registered Charity Number # 13042 1456 RR0001), the CILC relies on grants and donations to help fund our operating costs. We also participate in fundraising activities throughout the year.</p>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h1 className="font-bold">Become a CILC member and support our journey</h1>
                    <hr className="bg-deepblue"/>
                    <p>Consider a membership gift for yourself, a friend, or loved one.  A membership is only $25.00 (or $10.00 minimum, for those who require a charitable tax receipt) and includes a quarterly newsletter, special access to CILC events, and some other very special exclusive perks.</p>
                </Section>
            </HeaderedPage>
        </>
    );
};
 
export default Member;