import Header from "../../components/Header";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ListToday({boxData, setBoxData, isLoading, setIsLoading, setMessage, setMessageType}) {
    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading &&
                <div className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
                    <h1 className="text-2xl font-bold">Today's Prayer List</h1>

                    {/* map todays list here */}
                </div>
            }
        </div>
    )
}