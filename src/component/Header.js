export const Header = () => {
    return (
        <div className="bg-gray-100">
            <div className="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-2">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mt-6 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            welcome !
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-sky-800 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Test</span>
                        </span>{' '}
                            your Programming skills
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Life is learning . It is not enough to learn , it is very important to check how much you have learned.
                    </p>
                </div>
            </div>
        </div>
    );
};