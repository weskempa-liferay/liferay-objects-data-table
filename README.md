# Datatable Fragment for Liferay Objects

Liferay continues to invest in features that make low-code development possible. Using Liferay Objects, Collections, Forms, and Fragments, teams can quickly make fully functional systems that are more powerful and require less customization than ever before!

Since App Builder is deprecated (and fully removed) within the 7.4 release, Liferay Objects is intended to fill that gap. Through the use of this slick new feature, we will be investigating what we can do in the low-code to deliver both powerful functionality and the great user experience that you would expect from Liferay’s modern UI experience.

In this session, we will build a functional application that demonstrates Liferay’s ability to deliver value quickly and overcome the historical need to spend days of development creating service builder entities, CRUD UIs, integration with Liferay’s asset frameworks, and creating custom rest endpoints. Liferay Objects are automatically integrated with other Liferay Frameworks like Workflow, Permissions, Asset so that they can be immediately used alongside any out-of-the-box capabilities. It seems unbelievable to many! The great news is that it is not only possible in 7.4, but you can do it too!

*Let’s build great things together!!*

# 7.4 Setup

## Liferay Object 

1. Create Electric Vehicle Object (Example: Feel free to build an object structure that suits your needs) 

2. Object Needs the Fields

| Field             | Type                 | Required  |
| :---              |      :----:          |  :----:   |
| Make		        | String               | Yes       |
| Model			    | String               | Yes       |
| EV Type	        | String (or picklist) | Yes       |
| Battery Range     | Integer              | Yes       |
| Total Range     	| Integer              | Yes       |

<img src="./assets/datatable-0.png" alt="drawing" width="500"/>

3. Finish publishing your new object with in company scope. 

## Build Fragment Bundle

Navigate to the downloaded collection and run the following:

npm run compress

Import /liferay-objects-data-table/build/liferay-fragments.zip into site fragments.

## Load content

Load content. Loading many records quickly is easy to do using the headless api's bulk endpoint. <a href="./assets/bulk-data.json" target="_blank">Example data can be found here</a> for the Electric Vehicle example object.

<img src="./assets/datatable-1.png" alt="drawing" width="500"/>

<img src="./assets/datatable-2.png" alt="drawing" width="500"/>

## jQuery Configuration

*Note: Current version required jquery for event handling, dom traversal, and dropdown behavior.*

Enable jQuery in "System Settings" > "Third Party" > "jQuery"

## Page Setup

* Add the "Datatable from Objects" fragment to page

* Configure your datasource and columns in the sidebar.

<img src="./assets/datatable-3.png" alt="drawing" width="500"/>


## Contribute! 

Would love to hear comments and suggestions to make it better or provide more options!
