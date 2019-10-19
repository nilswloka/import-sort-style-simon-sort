function totalLength(comparator) {
    return function(firstImport, secondImport) {
        const firstLength = firstImport.end - firstImport.start,
            secondLength = secondImport.end - secondImport.start;
        return comparator(firstLength, secondLength);
    };
}

function isStyleImport(module) {
    return module.endsWith('.mless') || module.endsWith('.less');
}

function isInstanaModule(module) {
    return module.startsWith('in-') && (module.indexOf('/') > 0);
}

function descending(first, second) {
    if (second > first) {
        return 1;
    } else if (first > second) {
        return -1;
    } else {
        return 0;
    }
}

export default function(styleApi) {
    const {
        and,
        isRelativeModule,
        moduleName,
        not,
        or
    } = styleApi;
    return [
        {
            match: 
                and(
                    not(moduleName(isInstanaModule)), 
                    not(isRelativeModule), 
                    not(moduleName(isStyleImport))),
            sort: totalLength(descending)
        },
        {
            separator: true
        },
        {
            match: 
                and(
                    or(
                        moduleName(isInstanaModule), 
                        isRelativeModule), 
                    not(moduleName(isStyleImport))),
            sort: totalLength(descending)
        },
        {
            separator: true
        },
        {
            match: moduleName(isStyleImport),
            sort: totalLength(descending)
        },
        {
            separator: true
        }     
    ] 
};