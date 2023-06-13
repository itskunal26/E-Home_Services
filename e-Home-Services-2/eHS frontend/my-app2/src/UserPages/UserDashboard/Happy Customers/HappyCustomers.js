import '../Happy Customers/HappyCustomers.css';
import user1 from '../../../Images/user1.jpg';
import user2 from '../../../Images/user2.jpg'


const HappyCustomers =() =>
{
    return(
        <section id="happy">
            <div className="container">
                <h1 className="text-center title">What customer say</h1>
                <div className="row offset-2">
                <div className="col-md-5 happy">
                    <p> Great service, happy to use it again and again</p>
                    <img src={user1} alt="user1"/>
                    <p className="user"><b>Women</b><br/>Co-founder at XYZ</p>
                </div>
                <div className="col-md-5 happy">
                    <p> Great service, happy to use it again and again</p>
                    <img src={user2} alt="user2"/>
                    <p className="user"><b>Men</b><br/>Founder at PQR</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default HappyCustomers;