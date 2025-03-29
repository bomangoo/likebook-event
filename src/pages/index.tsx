import CommonLayout from '@/components/CommonLayout';
import MainHero from '@/parts/main/Hero';
import SectionOne from '@/parts/main/SectionOne';
import SectionTwo from '@/parts/main/SectionTwo';
import SectionThree from '@/parts/main/SectionThree';
import SectionFour from '@/parts/main/SectionFour';
import SectionFive from '@/parts/main/SectionFive';
import SectionSix from '@/parts/main/SectionSix';

export default function Company() {
    return (
        <CommonLayout title={''} description={''}>
            <MainHero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </CommonLayout>
    );
}
