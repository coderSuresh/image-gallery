import React from 'react'

const Footer = () => {
    return (
        <footer className='sm:mt-10 mt-5'>
            <div className="flex justify-center items-center p-4 bg-black text-white">
                <p className="text-sm">&copy; {new Date().getFullYear()}
                    <a href="https://github.com/coderSuresh"> Coder Suresh</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer