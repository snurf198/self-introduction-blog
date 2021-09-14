import Image from 'next/image';
import graffitiPoster from '../public/img/graffiti_poster.png';
import graffitiSeedPoster from '../public/img/graffiti_seed_poster.png';
import invGameUI from '../public/img/invgame.png';
import graffitiLogo from '../public/img/graffiti-logo.png';


export default function DesignProject() {
    return(
        <div className="bg-white m-8">
            <div className="w-96 m-auto p-8">
                <h1 className="text-xl font-bold">
                    2021 GRAFFITI 행사 포스터
                </h1>
                <Image src={graffitiPoster} />
            </div>
            <div className="w-96 m-auto p-8">
                <h1 className="text-xl font-bold">
                    2021 GRAFFITI 시드모집 포스터
                </h1>
                <Image src={graffitiSeedPoster} />
            </div>
            <div className="w-96 m-auto p-8">
                <h1 className="text-xl font-bold">
                    2021 GRAFFITI 투자게임 세션 앱 디자인
                </h1>
                <Image src={invGameUI} />
            </div>
            <div className="w-96 m-auto p-8">
                <h1 className="text-xl font-bold">
                    GRAFFITI 로고 디자인(사용 x)
                </h1>
                <Image src={graffitiLogo} />
            </div>
        </div>
    )
}