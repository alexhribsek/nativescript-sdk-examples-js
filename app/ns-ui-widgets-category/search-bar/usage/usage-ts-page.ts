// >> search-bar-basics-code-ts
import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("sbText", "");
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            const searchBar = propertyChangeData.object as SearchBar;
            console.log(`Input changed! New value: ${propertyChangeData.value}`);
        }
    });
    page.bindingContext = vm;
}

export function onSubmit(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Searching for ${searchBar.text}`);
}

export function onClear(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Clear event raised`);
}
// << search-bar-basics-code-ts
