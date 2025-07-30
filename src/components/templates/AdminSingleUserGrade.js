"use client"

import { getSingleUserGrades } from "@/service/adminSingleUserData";
import { convertToJalali, convertToTime } from "@/utils/setTime";
import React, { useEffect, useState } from "react";

const AdminSingleUserGrade = ({id}) =>{

    const [grades , setGrades] = useState()

    useEffect(()=>{
        const getGrades = async () => {
            const {response , error} = await getSingleUserGrades(id) 
            if(response){ 
                console.log(response.data)
                setGrades(response.data)
            }else{
                toast.error(error.response?.data.error)}
        }
        getGrades()

    },[])

    const getGradeType = (grade_type) =>{
        switch (grade_type) {
          case true:
            return "+";
          case false:
            return "-";
        }
      }

    const getStatusText = (status) => {
    switch (status) {
        case "completed":
        return "تکمیل شده";
        case "in_progess":
        return "در حال بررسی";
        case "cancelled":
        return "لغو شده";
        default:
        return "نامشخص";
    }
    };
    
    return(
        <div className=" border-[1px] rounded-xl w-[1024px]">
            
                      <table className="w-full table-auto">
                      <thead className="w-full">
                        <tr>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"> سطح </th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">تایید شده توسط کاربر</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">زمان دریافت سطح</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-x last:border-r-0"> زمان درخواست</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">وضعیت</th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        {grades?.results.map((grade, index) => (
                          <React.Fragment key={index}>
                            <tr className="w-full">
                              <td className="w-1/7 p-3 text-center border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{grade.grade || "—"}</td>
                              <td className="w-1/7 p-3 text-center border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{getGradeType(grade.is_accepted)}</td>
                              <td className="w-1/7 p-3 text-center border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{convertToJalali(grade.achieved_at)}_{convertToTime(grade.achieved_at)}</td>
                              <td className="w-1/7 p-3 text-center border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{convertToJalali(grade.created_at)}_{convertToTime(grade.created_at)}</td>
                              <td className="w-1/  p-3 text-center border-t-[1px] border-[#EDEDED] border-r">{getStatusText(grade.status)}</td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
        </div>
    )
}
export default AdminSingleUserGrade;