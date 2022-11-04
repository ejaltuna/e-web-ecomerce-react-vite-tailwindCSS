export default ({text}) => {
    return <a href="" className=" group py-2 md:py-8 relative">
        <span className="group-hover:text-orange-primary">{text}</span>
        <span className="absolute bottom-0 left-0 block w-full scale-x-0 group-hover:bg-orange-primary group-hover:scale-100 transition-all  duration-300 h-1"></span>
    </a>;
}