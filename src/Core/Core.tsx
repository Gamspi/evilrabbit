import React, {FC} from 'react';
import './Core.scss';
import AppRouter from "./components/AppRouter";

const Core: FC = () => {
    return (
        <div className="Core">
            <AppRouter/>
        </div>
    );
}
export default Core;
