import Donate1 from "../assets/img/donate1.png";
import Donate2 from "../assets/img/donate2.png";
import Donate3 from "../assets/img/donate3.png";

const Donations = [
  {
    id: 1,
    name: "The Strength of a People.\nPower of Community",
    picture: Donate1,
    total: 25000000,
    target: 200000000,
    donationApprovedUserId: [1, 2],
    donationNotApprovedUserId: [3, 4, 5, 6],
    isFinished: false,
  },
  {
    id: 2,
    name: "Empowering Communities\nEnding Poverty",
    picture: Donate2,
    total: 50000000,
    target: 200000000,
    donationApprovedUserId: [1, 2],
    donationNotApprovedUserId: [3, 4, 5, 6],
    isFinished: false,
  },
  {
    id: 3,
    name: "Please help our brothers in flores",
    picture: Donate3,
    total: 100000000,
    target: 200000000,
    donationApprovedUserId: [1, 2],
    donationNotApprovedUserId: [3, 4, 5, 6],
    isFinished: false,
  },
];
export default Donations;
