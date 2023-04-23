import React from "react";

function Header() {
    return (
        <div class="sticky top-0">
            <div class="relative z-20 border-b bg-[#E6EBA9]">
                <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
                    <div class="flex items-center justify-between">
                        <div class="relative z-20">
                            <a href="#" class="text-[24px]">FoodFastForU</a>
                        </div>

                        <div class="flex items-center justify-end border-l lg:border-l-0">
                            <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" hidden />
                            <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                            </label>

                            <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#E6EBA9] border-r shadow-xl transition duration-400 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                    <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                        <li>
                                            <a href="#" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative bg-[#ECD8A5] group-hover:bg-[#E3C67B] text-[calc(60%+0.8vmin)] rounded py-1 px-2">About Us</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative bg-[#ECD8A5] group-hover:bg-[#E3C67B] text-[calc(60%+0.8vmin)] rounded py-1 px-2">Register</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative bg-[#ECD8A5] group-hover:bg-[#E3C67B] text-[calc(60%+0.8vmin)] rounded py-1 px-2">Login</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                <span class="relative bg-[#ECD8A5] group-hover:bg-[#E3C67B] text-[calc(60%+0.8vmin)] rounded py-1 px-2">Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
