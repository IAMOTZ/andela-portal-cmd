# Andela Portal CMD
A command line tool for the different resource at [portal.andela.com](portal.andela.com).

## Installation
>  This tool was developed with Node version `8.11.1`. You should ensure you have something similar. 

Install(globally) with:  
```
npm install andela-portal-cmd -g
```   
or    
```
yarn add andela-portal-cmd -g
```   
It is advisable you install the package globally so that you can access the command anywhere in your terminal.

After installation, you should have access to the `apl` command which is what is exposed by this package. You can confirm that `apl` is installed by doing:  
```
apl -v
```   
You should get a valid result if `apl` was properly installed.  
> For `zsh` users, autocompletion plugin for all the portals is on its way :fire:

## Commands and Usage

| Command | Description |
| --- | --- |
| `apl <portal>` | Opens the portal in your default browser |
| `apl -v, --version` | Output the version number |
| `apl -h, --help` | Output usage information |
| `apl -l , --list`| List all the available portals |

## Available Resources

| Portal | Command |
| --- | --- |  
| Allocations | `apl allocations` |
| Andela.com | `apl andela` |
| Andela Information System | `apl ais` |
| Andela Intranet(success) | `apl successIntranet` |
| Andela Intranet(learning) | `apl learningIntranet` |
| BambooHR | `apl bamboo` |
| Canvas | `apl canvas` |  
| Freckle | `apl freckle` |
| Github | `apl github` |
| Greenhouse | `apl greenhouse` |
| Grovo | `apl grovo` |
| Helpdesk | `apl helpdesk` |
| Learning Velocity | `apl lv` |
| Lenken | `apl lenken` |
| MyBalsamiq | `apl balsamiq` |
| Pivotal Tracker | `apl pivotal` |
| PluralSight | `apl pluralsight` |
| Pulse | `apl pulse` |
| Small Improvements | `apl si` |
| VOF | `apl vof` |
| Zhishi | `apl zhishi` |


## Limitation
We have added support for windows and Linux machines, however, the Linux machine should have ``firefox``, and even with that I doubt it'll work.

## Inspiration
I was inspired(primarily) by this chrome [extension](https://chrome.google.com/webstore/detail/andelaportals/aaepbgfnniojdkdkcihojbecgndhgoko?brand=CHBD&gclid=EAIaIQobChMI9K--0KPN3gIVz53tCh2sNw6eEAAYASABEgLWv_D_BwE&gclsrc=aw.ds) built by a friend(@andela-sjames).  
*Question*   
Developers are mostly busy in their command line, why not build something that is accessible through the command line??  
*Answer*  
andela-portal-cmd :sparkles:



## Contribution
If you think there is anything that can get better in this project, please feel free to raise a Pull Request.
