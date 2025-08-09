
import { Belief } from '../types.ts';
import { BibleIcon, TrinityIcon, GraceIcon, CrossIcon, ChurchIcon, SacramentsIcon, GlobeIcon } from '../components/icons.tsx';

export const beliefsData: Belief[] = [
    {
        title: "The Bible is the Word of God",
        description: "We believe the Bible is the inspired, infallible Word of God and the final authority in all matters of faith and life.",
        Icon: BibleIcon,
    },
    {
        title: "The Trinity",
        description: "We believe in one God, existing eternally in three persons: Father, Son, and Holy Spirit.",
        Icon: TrinityIcon,
    },
    {
        title: "Salvation by Grace through Faith",
        description: "We believe we are saved by God's grace alone, through faith in Jesus Christ.",
        Icon: GraceIcon,
    },
    {
        title: "Jesus Christ as Lord and Savior",
        description: "We believe in the divinity, death, and resurrection of Jesus Christ as the only way to eternal life.",
        Icon: CrossIcon,
    },
    {
        title: "The Church as the Body of Christ",
        description: "We believe the Church is the spiritual body of Christ, called to worship, fellowship, and serve.",
        Icon: ChurchIcon,
    },
    {
        title: "The Sacraments",
        description: "We affirm two sacraments instituted by Christ: Baptism and the Lord’s Supper.",
        Icon: SacramentsIcon,
    },
    {
        title: "Mission to the World",
        description: "We believe in evangelism, discipleship, and compassionate service as expressions of God’s love.",
        Icon: GlobeIcon,
    },
];
