import React, { Fragment, useState } from 'react';
import axios from 'axios';

function MenuMaMa() {
    return (
        <Fragment>
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านมามา ก๋วยเตี๋ยวเรือ</div>
                <div class="p-3 bg-[#B9DBAD]">
                    <h1 class="relative h-40 w-100 absolute inset-y-0 left-0 text-black text-5xl text-center">เมนู</h1>
                </div>
                <div class="border-l-8 border-l-transparent gap-0 justify-self-end bg-left-bottom">
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูเส้นๆ
                            <h2 class="list-inside text-left">
                                <li>ก๋วยเตี๋ยวเรือหมูน้ำตก 35 บาท</li>
                                <li>ก๋วยเตี๋ยวเนื้อตุ๋น 40 บาท</li>
                                <li>ก๋วยเตี๋ยวหมูตุ๋น,ก๋วยเตี๋ยวไก่ตุ๋น 35 บาท</li>
                                <li>ก๋วยเตี๋ยวน้ำใส 35 บาท</li>
                                <li>ก๋วยเตี๋ยวต้มยำน้ำใส/น้ำข้น  35 บาท</li>
                                <li>เย็นตาโฟ 35 บาท</li>
                                <li>ก๋วยจั๊บ 35 บาท</li>
                                <li>เกี๊ยวหมูน้ำแดง 35 บาท</li>
                            </h2>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูเกาเหลา
                            <h2 class="list-inside text-left">
                                <li>เกาเหลาหมูตุ๋น 35 บาท</li>
                                <li>เกาเหลาเนื้อตุ๋น 35 บาท</li>
                                <li>เกาเหลาไก่ตุ๋น 35 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดเพิ่มเติม
                                <h2 class="list-inside text-left">
                                    <li>ไข่เป็ดยางมะตูม 10 บาท</li>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-evenly">
                <button type="button" class="bg-[#CDC5AF] hover:bg-[#B9AE90] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">กลับไปหน้าร้านอาหาร</button>
                <button type="button" class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">ต่อไป</button>
            </div>
        </Fragment>
    )
}

export default MenuMaMa;