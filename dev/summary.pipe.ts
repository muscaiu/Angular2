import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'summary'})

export class SummaryPipe implements PipeTransform{
    transform(value: string, args: string[]){
        //THIS MEANS if we have args and args has an element we parse that element to an integer and return it
        var limit = (args && args[0]) ? parseInt(args[0]): 50;
        if(value) 
            return value.substring(0,limit) + "...";
    }
}