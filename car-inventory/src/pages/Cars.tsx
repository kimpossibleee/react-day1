import Post from '/Users/yeayoungkim/Desktop/yeayoungkim/CODINGTEMPLE/week9/day1/lecture/day1_hw/car-inventory/src/components/CarDetails.tsx'

export default function Posts() {
    const carsArray = [
        {
            make: 'Toyota',
            model: 'Camry',
            year: 2022,
            price: 25000,
        },
        {
            make: 'Honda',
            model: 'Accord',
            year: 2021,
            price: 28000,
        },
        {
            make: 'Ford',
            model: 'Mustang',
            year: 2020,
            price: 40000,
        },
    ];
    return (
        <>
            {carsArray.map((post) => { return  <Post post={post} key={post.make.toString()} />})}
        </>
    )
}
