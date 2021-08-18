let reasons = {
    "Categories":[
        {
            "DisplayName":"Category 1",
            "ID":"cat_1",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_1_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_1_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_1_reas_3"
                }
            ]
        },{
            "DisplayName":"Category 2",
            "ID":"cat_2",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_2_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_2_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_2_reas_3"
                }
            ]
        },{
            "DisplayName":"Category 3",
            "ID":"cat_3",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_3_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_3_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_3_reas_3"
                }
            ]
        },
        {
            "DisplayName":"Category 4",
            "ID":"cat_4",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_4_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_4_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_4_reas_3"
                }
            ]
        },{
            "DisplayName":"Category 5",
            "ID":"cat_5",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_5_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_5_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_5_reas_3"
                }
            ]
        },{
            "DisplayName":"Category 6",
            "ID":"cat_6",
            "Reasons":[
                {
                    "DisplayName":"Reason 1",
                    "ID":"cat_6_reas_1"
                },{
                    "DisplayName":"Reason 2",
                    "ID":"cat_6_reas_2"
                },{
                    "DisplayName":"Reason 3",
                    "ID":"cat_6_reas_3"
                }
            ]
        }
    ]
};

let multi = new Multiselect({
    input: '#multi_input',
    target: '#multi_id',
    choices: reasons,
    parentSelectable: true,
    parentSelectAll: true,
    selectAll: true,
    collapsable: true,
    collapseAll: true,
    displayOneSelected: true,
//   width: 168,
    height: 300,
    handleData: (data) => data.Categories.map(i => {
        const obj = {
            id: i.ID,
            name: i.DisplayName
        }
        if(i.Reasons) {
            obj.children = i.Reasons.map(j => {
                return {
                    id: j.ID,
                    name: j.DisplayName,
                    selectable: true
                }
            })
        }
        return obj;
    }),
    handleSelectedItems: (selectedItems) => {
        // console.log(selectedItems);
    }
});
