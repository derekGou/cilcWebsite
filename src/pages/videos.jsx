import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Video from "../components/video";
 
const Videos=() => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="" color="cilcpurple"/>
                <Section>
                    <div className="grid w-full h-fit gap-y-8 gap-x-8 min-[900px]:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
                        <Video vid="_Rdp1Q4bNhU"/>
                        <Video vid="5zx6yAg_QFQ"/>
                        <Video vid="1mKjV4e159M"/>
                        <Video vid="i_FGRviFhsw"/>
                        <Video vid="G7Bl3Z35kTM"/>
                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Videos;