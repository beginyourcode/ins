export class ENUMERATION {
    MANUFACTURING_YEAR_RENEW:any = Array.from(new Array(14), (x, i) => i + 2004);
    MANUFACTURING_YEAR_NEW:any = Array.from(new Array(2), (x, i) => i + 2018);
    POLICY_EXPIRY: { [key: number]: string } =
        {
            1: 'Expiring today or tomorrow',
            2: 'Expiring in few days',
            3: 'Expired, less than 90 days ago',
            4: 'Expired, more than 90 days ago'
        };
    // MANUFACTURING_YEAR_RENEW(): any {
    //     return Array.from(new Array(14), (x, i) => i + 2004);
    // }
    // MANUFACTURING_YEAR_NEW(): any {
    //     return Array.from(new Array(2), (x, i) => i + 2018);
    // }
    A:any  = [
        {label: '2019', value: '2019'},
        {label: '2018', value: '2018'},
    ];
    B:any  = [
        {label: '2019', value: '2019'},
        {label: '2018', value: '2018'},
        {label: '2017', value: '2017'},
        {label: '2016', value: '2016'},
        {label: '2015', value: '2015'},
        {label: '2014', value: '2014'},
        {label: '2013', value: '2013'},
        {label: '2012', value: '2012'},
        {label: '2011', value: '2011'},
        {label: '2010', value: '2010'},
        {label: '2009', value: '2009'},
        {label: '2008', value: '2008'},
        {label: '2007', value: '2007'},
        {label: '2006', value: '2006'},
        {label: '2005', value: '2005'},
        {label: '2004', value: '2004'},
    ];
}
module M {
    var s = "hello";
    export function f() {
        return Array.from(new Array(14), (x, i) => i + 2004);
    }
}