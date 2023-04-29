import React, { Fragment, useState } from 'react';
import { BsCircleFill, BsFillStarFill } from "react-icons/bs";
import axios from 'axios';

function StatusOrder() {
    // 5 Status Order 
    // if true status dot will be green
    // if false status dot will be gray
    const [orderStatus, setOrderStatus] = useState(true);
    const [goingStatus, setGoingStatus] = useState(false);
    const [waitingStatus, setWaitingStatus] = useState(false);
    const [sendingStatus, setSendingStatus] = useState(false);
    const [confirmStatus, setConfirmStatus] = useState(false);

    const [username] = useState('');
    const [phoneNumber] = useState('');

    return (
        <Fragment>
            <div class="grid gap-3 m-auto mt-2 sm:pl-5 sm:pr-5">
                <label class="text-[calc(100%+0.8vmin)]">
                    STATUS ORDER
                </label>
                <div class="">
                    <label>
                        ORDER ร้านเจ๊ดาตามสั่งกระทะร้อน
                    </label>
                    <div class="grid gap-5 bg-[#CFC7B1] rounded-xl pt-3 pb-3 sm:p-5">
                        <div class="grid grid-cols-5 justify-items-center">
                            <img class="w-12 h-12 sm:w-16 sm:h-16" src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588591076986990/image.png" />
                            <img class="w-12 h-12 sm:w-16 sm:h-16" src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588640938860564/image.png" />
                            <img class="w-12 h-12 sm:w-16 sm:h-16" src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588675076300870/image.png" />
                            <img class="w-12 h-12 sm:w-16 sm:h-16" src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588695850684437/image.png" />
                            <img class="w-12 h-12 sm:w-16 sm:h-16" src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588757574078535/image.png" />
                        </div>
                        <div class="z-10 grid grid-cols-5 justify-items-center">
                            {orderStatus ? <BsCircleFill class="text-[#8DB280] border-[#8DB280] rounded-full" /> : <BsCircleFill class="text-[#D9D9D9]" />}
                            {goingStatus ? <BsCircleFill class="text-[#8DB280]" /> : <BsCircleFill class="text-[#D9D9D9]" />}
                            {waitingStatus ? <BsCircleFill class="text-[#8DB280]" /> : <BsCircleFill class="text-[#D9D9D9]" />}
                            {sendingStatus ? <BsCircleFill class="text-[#8DB280]" /> : <BsCircleFill class="text-[#D9D9D9]" />}
                            {confirmStatus ? <BsCircleFill class="text-[#8DB280]" /> : <BsCircleFill class="text-[#D9D9D9]" />}
                        </div>
                        <div class="grid grid-cols-5 justify-items-center">
                            <label>
                                รับ order แล้ว
                            </label>
                            <label>
                                กำลังไปร้านอาหาร
                            </label>
                            <label>
                                กำลังรออาหาร
                            </label>
                            <label>
                                รับอาหารแล้วกำลังนำไปส่ง
                            </label>
                            <label>
                                จัดส่งอาหารเรียบร้อย
                            </label>
                        </div>
                    </div>
                </div>

                <div class="flex gap-5 items-center bg-[#ECD8A5] rounded-xl p-5">
                    <img class="block border border-[#E3C67B] rounded-full shadow w-36 h-36" src="https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png" ></img>
                    <div class="grid justify-items-start items-center">
                        <div class="flex gap-2">
                            <label class="text-[calc(100%+0.8vmin)]">
                                ชื่อผู้รับฝาก:
                            </label>
                            <label class="text-[calc(100%+0.8vmin)]">
                                Username
                            </label>
                        </div>
                        <div class="flex gap-2">
                            <label class="text-[calc(100%+0.8vmin)]">
                                เบอร์โทรศัพท์:
                            </label>
                            <label class="text-[calc(100%+0.8vmin)]">
                                09x-xxxx-xxx
                            </label>
                        </div>
                        <div class="grid gap-1 justify-items-start">
                            <label class="text-[calc(100%+0.8vmin)]">
                                คะแนนความพึงพอใจ
                            </label>
                            <div class="flex gap-5 text-[calc(100%+0.8vmin)]">
                                <BsFillStarFill class="text-[#FF7F41]" />
                                <BsFillStarFill class="text-[#FF7F41]" />
                                <BsFillStarFill class="text-[#FF7F41]" />
                                <BsFillStarFill class="text-[#FF7F41]" />
                                <BsFillStarFill class="text-[#FF7F41]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-evenly">
                    <button class='bg-[#CDC5AF] hover:bg-[#B9AE90] text-base rounded font-bold py-2 px-3 mt-6 mb-6'>
                        กลับ
                    </button>
                    <button class='bg-[#BBD9B0] hover:bg-[#9DC88E] text-base rounded font-bold py-2 px-3 mt-6 mb-6'>
                        รับ ORDER เรียบร้อย
                    </button>
                </div>

            </div>
        </Fragment>
    )
}

export default StatusOrder;