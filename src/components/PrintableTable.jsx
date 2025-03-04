import React from "react"
import { Fragment } from "react"

export default function PrintableTable({data}) {
    
    return (
        <table border={'1'} cellPadding={'50'} cellSpacing={'0'} className="bg-white w-full">
            <thead className="bg-slate-200 w-full border-1">
                <tr className="border-1 text-xl text-left">
                    <th colSpan={'3'} className="p-2 font-bold border-1">Today's Prayer List</th>
                </tr>
                <tr className="border-1">
                    <th className="border-1 p-1 text-left">Category</th>
                    <th className="border-1 p-1 text-left">Card Title</th>
                    <th className="border-1 p-1 text-left">Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((cat) => {
                    return (
                        <tr key={cat.categoryName} className="border-1">
                            <th className="bg-slate-200 border-1 p-1 py-4 text-left">{cat.categoryName}</th>
                            {cat.cards.map((card) => {
                                return (
                                    <React.Fragment key={card.cardTitle}>

                                    <td className="border-1 p-1 text-left">{card.cardTitle}</td>
                                    <td className="border-1 p-1 text-left">{card.cardDescription}</td>
                                    </React.Fragment>
                                )
                            })}
                        </tr>
                    )
                })}
                {/* <tr className="border-top border-1">
                    <th className="bg-slate-200">Row one category</th>
                    <td>Row one info</td>
                </tr>
                <tr className="border-top border-1">
                    <th className="bg-slate-200">Row two category</th>
                    <td>Row two info</td>
                </tr> */}
            </tbody>
        </table>
    )
}