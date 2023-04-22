// @flow strict
interface details{
    name: string
}
type Props = {
    details:details
};

function Home(props: Props) {
    return (
        <div>
            <p className='text-base'>{props.details.name}</p>
        </div>
    );
};

export default Home;