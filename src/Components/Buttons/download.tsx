import Button from '../Common/IconButton';
import { Download } from "./../../Assets/Icons";
import * as React from "react";

const DownloadIcon = () =>
        <Button onClick={(e) =>console.log('downloadImg', e)}>
            <Download />
        </Button>


export default DownloadIcon;
