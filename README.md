# Andela Portal CMD
A command line tool for the different resource at [portal.andela.com](portal.andela.com).
> If you don't work at [Andela](andela.com), this tool might not be useful for you.

## Installation
>  This tool was developed with Node version `8.11.1`. You should ensure you have something similar. 

Install(globally) with:  
```
npm install andela-portal-cmd -g
```   
or    
```
yarn global add andela-portal-cmd
```   
It is advisable you install the package globally so that you can access the command anywhere in your terminal.

After installation, you should have access to the `apl` command which is what is exposed by this package. You can confirm that `apl` is installed by doing:  
```
apl -v
```   
You should get a valid result if `apl` was properly installed.  

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
| Andela Website | `apl andela` |
| Andela Information System | `apl ais` |
| Andela Intranet(success) | `apl intranet-s` |
| Andela Intranet(learning) | `apl intranet-l` |
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
**_Question_**   
Developers are mostly busy in their command line, why not build something that is accessible through the command line??  
**_Answer_**  
andela-portal-cmd :sparkles:



## Contribution
If you think there is anything that can get better in this project, please feel free to raise a Pull Request.

### What can you develop?
How about we have an autocompletion plugin(zsh or bash) for all the portals???? :bulb:
