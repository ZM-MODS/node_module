import { TCustomCodeHelpersGroupAppendMethodName } from './TCustomCodeHelpersGroupAppendMethodName';
import { TNodeWithStatements } from '../node/TNodeWithStatements';
import { ICallsGraphData } from '../../interfaces/analyzers/calls-graph-analyzer/ICallsGraphData';
export declare type TCustomCodeHelpersGroupAppendMethods = {
    [key in TCustomCodeHelpersGroupAppendMethodName]?: (nodeWithStatements: TNodeWithStatements, callsGraphData: ICallsGraphData[]) => void;
};
