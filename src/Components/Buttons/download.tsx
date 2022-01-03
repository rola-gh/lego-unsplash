import Button from '../Common/IconButton';
import  {ReactComponent as DownloadSvg } from "../../Assets/Icons/download.svg";
import * as React from "react";

const DownloadIcon = () =>
        <Button onClick={(e) =>console.log('downloadImg', e)}>
            <DownloadSvg />
        </Button>


export default DownloadIcon;
